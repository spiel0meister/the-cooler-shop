export interface Button {
    label: string;
    id: string;
    faIcon: string;
    condition(): boolean;
    onClick(): void;
}
