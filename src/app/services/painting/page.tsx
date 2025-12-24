"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function PaintingPage() {
    return <ServicePageLayout data={serviceData.painting} />;
}
