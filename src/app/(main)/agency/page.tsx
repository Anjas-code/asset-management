import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AgencyPage = async () => {
    const agencyId = await verifyAndAcceptInvitation()
    console.log(agencyId)

    const user = await getAuthUserDetails()

    return <div>Agency-dashboard</div>;
};

export default AgencyPage;
