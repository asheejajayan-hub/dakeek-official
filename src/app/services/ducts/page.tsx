"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function DuctsPage() {
    return <ServicePageLayout data={serviceData.ducts} />;
}
