package com.example.retail.controller;
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;
    private final PasswordService passwordService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return service.signup(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody Map<String,String> req) {
        return service.login(req.get("email"), req.get("password"));
    }

    @PostMapping("/forgot-password")
    public String forgot(@RequestBody Map<String,String> req) {
        return passwordService.forgot(req.get("email"));
    }

    @PostMapping("/reset-password")
    public String reset(@RequestBody Map<String,String> req) {
        passwordService.reset(req.get("token"), req.get("newPassword"));
        return "Password updated";
    }
}