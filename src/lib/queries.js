import { eventModel } from "../models/event-model";
import { userModel } from "../models/user-model"
import { replaceMongoIdInArray, replaceMongoIdInObject } from "../utils/data-util";

async function upsertNewUser(user) {
    const existingUser = await userModel.findOne({ email: user.email });
    console.log(existingUser, "existing user");
    if (existingUser) {
        throw new Error("user already exist with this email")
    }
    else {
        return await userModel.create(user);
    }
}

async function fetchLoginUser(credentials) {
    console.log(credentials, "credentials from action");
    const user = await userModel.findOne(credentials);
    console.log(user, "user from action");
    if (user) {
        return user;
    } else {
        throw new Error("User not found")
    }
}

async function getAllEvents() {
    try {
        const allEvents = await eventModel.find().lean();
        return replaceMongoIdInArray(allEvents);
    } catch (error) {
        console.error(error);
    }
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}

export {
    getAllEvents,
    getEventById,
    upsertNewUser,
    fetchLoginUser
}