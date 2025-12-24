"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function GasPage() {
    return <ServicePageLayout data={serviceData.gas} />;
}
