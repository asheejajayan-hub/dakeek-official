"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";

export default function KitchenPage() {
    return <ServicePageLayout data={serviceData.kitchen} />;
}
