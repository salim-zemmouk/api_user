package projet_user.user_api;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    // Recherche d'un utilisateur par son nom d'utilisateur
    UserModel findByUsername(String username);
}
