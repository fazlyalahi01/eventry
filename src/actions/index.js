'use server'

import { redirect } from "next/navigation";
import {upsertNewUser} from "../lib/queries"

async function handleSubmitRegistration(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const bio = formData.get("bio");

    const registerData = {
        name,
        email,
        password,
        phone,
        bio
    }
    const userCreated = await upsertNewUser(registerData);

    redirect("/login")

}
async function handleSubmitLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const loginData = {
        email,
        password
    }
    console.log(loginData);

}


export {
    handleSubmitLogin,
    handleSubmitRegistration
}
