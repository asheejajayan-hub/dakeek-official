"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function HVACPage() {
    return <ServicePageLayout data={serviceData.hvac} />;
}
