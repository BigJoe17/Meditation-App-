export type Meditation ={
    id: number;
    title: string;
    type: 'audio' | 'video';
    duration: number; // duration in seconds
    pro: boolean;
}