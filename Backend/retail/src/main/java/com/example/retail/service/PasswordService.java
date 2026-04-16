package com.example.retail.service;

@Service
@RequiredArgsConstructor
public class PasswordService {

    private final UserRepository userRepo;
    private final TokenRepository tokenRepo;
    private final PasswordEncoder encoder;

    public String forgot(String email) {
        User user = userRepo.findByEmail(email).orElseThrow();

        String token = UUID.randomUUID().toString();

        PasswordResetToken t = new PasswordResetToken();
        t.setUser(user);
        t.setToken(token);
        t.setExpiry(LocalDateTime.now().plusMinutes(10));

        tokenRepo.save(t);
        return token;
    }

    public void reset(String token, String newPassword) {
        PasswordResetToken t = tokenRepo.findByToken(token).orElseThrow();

        if (t.getExpiry().isBefore(LocalDateTime.now()))
            throw new RuntimeException("Expired");

        User user = t.getUser();
        user.setPassword(encoder.encode(newPassword));
        userRepo.save(user);
    }
}
