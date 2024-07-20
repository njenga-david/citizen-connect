import { Request, Response, RequestHandler } from 'express';
import { v4 as uid } from 'uuid';
import { sqlConfig } from '../config';
import mssql from 'mssql';
import { DbHelper } from '../DatabaseHelpers';
import { ViewSchema } from '../inputValidation/viewValidation';
import { ViewRequest, Views } from '../Models/viewModel';

const dbInstance = new DbHelper();

export const addView = async (req: ViewRequest, res: Response) => {
    try {
        const id = uid();

        console.log(req.body);

        // Input validation
        const { error } = ViewSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { userId, viewContent } = req.body;

        if (!userId || !viewContent) {
            return res.status(400).json({ message: "All fields are required" });
        }

        await dbInstance.exec("addView", {
            viewId: id,
            userId,
            viewContent
        });

        return res.status(201).json({ message: "View Created" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const getView = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const view = (await dbInstance.exec('getView', { viewId: req.params.id })).recordset[0] as Views;

        if (view && view.viewId) {
            return res.status(200).json(view);
        }

        return res.status(404).json({ message: "View not Found" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const getViews: RequestHandler = async (req, res) => {
    try {
        const views = (await dbInstance.exec('getViews', {})).recordset as Views[];
        console.log(views);
        return res.status(200).json(views);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const updateView = async (req: Request<{ id: string }> & ViewRequest, res: Response) => {
    try {
        const { error } = ViewSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const view = (await dbInstance.exec('getView', { viewId: req.params.id })).recordset[0] as Views;

        if (view && view.viewId) {
            const { viewContent } = req.body;

            await dbInstance.exec('updateView', {
                viewId: req.params.id,
                viewContent
            });

            return res.status(200).json({ message: "View Updated" });
        }

        return res.status(404).json({ message: "View not Found" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deleteView = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const view = (await dbInstance.exec('getView', { viewId: req.params.id })).recordset[0] as Views;

        if (view && view.viewId) {
            await dbInstance.exec('deleteView', { viewId: req.params.id });
            return res.status(200).json({ message: "View Deleted" });
        }

        return res.status(404).json({ message: "View not Found" });
    } catch (error) {
        return res.status(500).json(error);
    }
};
