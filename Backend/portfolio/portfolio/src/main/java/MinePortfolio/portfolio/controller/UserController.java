package MinePortfolio.portfolio.controller;


import MinePortfolio.portfolio.model.User;
import MinePortfolio.portfolio.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;



    @PostMapping("/addUserDetails")
    ResponseEntity<User> addUserDetails(@Valid @RequestBody User user)
    {
        return new ResponseEntity<>(userService.addUser(user),HttpStatus.CREATED);
    }
}
