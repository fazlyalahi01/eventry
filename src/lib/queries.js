import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import { eventModel } from "../models/event-model";

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}

export {
    getAllEvents,
    getEventById
}