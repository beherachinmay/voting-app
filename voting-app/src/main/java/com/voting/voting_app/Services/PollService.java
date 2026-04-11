package com.voting.voting_app.Services;

import com.voting.voting_app.model.OptionVote;
import com.voting.voting_app.model.Poll;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.voting.voting_app.repositiories.PollRepositiory;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {

    private final PollRepositiory pollrepository;

    public PollService(PollRepositiory pollrepository) {
        this.pollrepository = pollrepository;
    }

    public Poll createPoll(Poll poll) {
        return pollrepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollrepository.findAll();
    }

    public Optional<Poll> getPollById(Long id) {
        return pollrepository.findById(id);
    }

    public void vote(Long pollId, int optionIndex)  {
        //Get Poll from DB
        Poll poll = pollrepository.findById(pollId)
                .orElseThrow(() -> new RuntimeException("Poll not found"));

        //Get All Options
        List<OptionVote> options = poll.getOptions();

        //If Index for vote is not valid, throw error
        if (optionIndex < 0 || optionIndex >= options.size()){
            throw new IllegalArgumentException("Invalid option index");
        }

        //Get Selected Option
        OptionVote selectedOption = options.get(optionIndex);

        //Increment vote for selected option
        selectedOption.setVoteCount(selectedOption.getVoteCount() + 1);

        //save incremented option into the database
        pollrepository.save(poll);
    }
}
