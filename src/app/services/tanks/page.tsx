"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function TanksPage() {
    return <ServicePageLayout data={serviceData.tanks} />;
}
