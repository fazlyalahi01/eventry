'use server'
// server actions file
import { redirect } from "next/navigation";
import { findUserByCredentials, getEventById, updateGoing, updateInterest, upsertNewUser } from "../lib/queries"
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import EmailTemplate from "../components/payments/EmailTemplate"

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
    await upsertNewUser(registerData);

    redirect("/login")

}
async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

async function toggleInterestButton(authId, eventId) {
    try {
        await updateInterest(authId, eventId)
    } catch (error) {
        throw error
    }
    revalidatePath("/")
}


async function handleGoingButton(eventId, user) {
    try {
        await updateGoing(eventId, user?.id);
        await sendEmail(eventId, user);

    } catch (error) {
        throw error;
    }
    revalidatePath('/');
    redirect('/');
}

async function sendEmail(eventId, user) {
    try {
        const event = await getEventById(eventId);
        const resend = new Resend(process.env.RESEND_API_KEY);
        const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;
        const sent = await resend.emails.send({
            from: 'Eventry - Registration Successfull <onboarding@resend.dev>',
            to: user?.email,
            subject: "Successfully Registered for the event!",
            react: EmailTemplate({ message })
        });
    } catch (error) {
        throw error;
    }
}

export {
    performLogin,
    handleSubmitRegistration,
    toggleInterestButton,
    handleGoingButton,
    sendEmail
}
