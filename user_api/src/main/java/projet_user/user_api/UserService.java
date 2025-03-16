package projet_user.user_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Récupérer tous les utilisateurs
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    // Récupérer un utilisateur par son ID
    public Optional<UserModel> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Ajouter un nouvel utilisateur
    public UserModel createUser(UserModel user) {
        return userRepository.save(user);
    }

    // Mettre à jour un utilisateur
    public UserModel updateUser(Long id, UserModel updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setPassword(updatedUser.getPassword());
            return userRepository.save(user);
        }).orElse(null);
    }

    // Supprimer un utilisateur
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
