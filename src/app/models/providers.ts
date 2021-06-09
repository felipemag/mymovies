export class Providers {
    rent?: ProviderDetail[];  
    flatrate?: ProviderDetail[];  
    buy?: ProviderDetail[];
}

class ProviderDetail{
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: number;
}

