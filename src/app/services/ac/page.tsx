"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function ACServicePage() {
    return <ServicePageLayout data={serviceData.ac} />;
}
