"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function PlumbingPage() {
    return <ServicePageLayout data={serviceData.plumbing} />;
}
