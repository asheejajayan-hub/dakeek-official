"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function EmergencyPage() {
    return <ServicePageLayout data={serviceData.emergency} />;
}
