package com.voting.voting_app.repositiories;

import com.voting.voting_app.model.Poll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PollRepositiory extends JpaRepository<Poll, Long> {
}
