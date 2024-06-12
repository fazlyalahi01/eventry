import mongoose, { Mongoose } from "mongoose";
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

async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function getAllEvents(query) {
    try {
        const regx = new RegExp(query, 'i');
        const allEvents = await eventModel.find({ name: regx }).lean();
        return replaceMongoIdInArray(allEvents);
    } catch (error) {
        console.error(error);
    }
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}


async function updateInterest(eventId, authId) {

    const event = await eventModel.findById(eventId);

    if (event) {
        const foundUsers = event.interested_ids.find(id => id.toString() === authId);

        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId));
        }

        event.save();
    }
}

async function updateGoing(eventId, authId) {
    const event = await eventModel.findById(eventId);
    const found = event.going_ids.find(id => id.toString() === authId)
    if (found) return;
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save();
}

// async function updateInterest(eventId, authId) {
//     const event = eventModel.findById(eventId);
//     console.log(event);
//     if (event) {
//         const foundUser = event.interested_ids?.find(id => id.toString() === authId);
//         if (foundUser) {
//             event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
//         } else {
//             event.interested_ids.push(new mongoose.Types.ObjectId(authId));

//         }
//     }

//     event.save();
// }

export {
    getAllEvents,
    getEventById,
    upsertNewUser,
    findUserByCredentials,
    updateInterest,
    updateGoing
}