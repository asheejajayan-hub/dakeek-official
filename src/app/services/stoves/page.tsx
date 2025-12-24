"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function StovesPage() {
    return <ServicePageLayout data={serviceData.stoves} />;
}
