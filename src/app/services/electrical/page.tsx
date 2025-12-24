"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function ElectricalPage() {
    return <ServicePageLayout data={serviceData.electrical} />;
}
