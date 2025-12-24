"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function AMCPage() {
    return <ServicePageLayout data={serviceData.amc} />;
}
