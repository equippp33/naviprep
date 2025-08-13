import { db } from "./db";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { sessionsTable, usersTable } from "./db/schema";
import { Lucia } from "lucia";
import { env } from "~/env";
import { cookies } from "next/headers";
import { cache } from "react";
import { redirect } from "next/navigation";
// import { ActionResult } from "next/dist/server/app-render/types";
import { uncachedValidateRequest } from "./validrequest";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionsTable, usersTable);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: env.NODE_ENV === "production"
        },
    },
    getUserAttributes(attributes) {
        return {
            phoneNumberOrEmail: attributes.phoneNumberOrEmail,
        }
    },
})

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    phoneNumberOrEmail: string;
}

