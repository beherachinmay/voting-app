export interface OptionVote {
    optionText: string;
    votes: number;
}

export interface PollApp1 {
    id: number;
    question: string;
    options: OptionVote[];
}
