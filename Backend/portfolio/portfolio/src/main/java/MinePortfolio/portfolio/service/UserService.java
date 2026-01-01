package MinePortfolio.portfolio.service;

import MinePortfolio.portfolio.model.User;
import MinePortfolio.portfolio.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User addUser(User user)
    {
        return userRepository.save(user);
    }
}
