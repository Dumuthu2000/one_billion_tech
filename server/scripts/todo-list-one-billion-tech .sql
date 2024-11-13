SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `due_date` datetime NOT NULL,
  `due_time` time NOT NULL,
  `is_complete` tinyint(1) DEFAULT 0,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tasks` (`task_id`, `title`, `description`, `due_date`, `due_time`, `is_complete`, `user_id`, `created_at`, `updated_at`) VALUES
(7, 'Optimize Database Queries', 'Analyze the performance of current database queries. Optimize any slow queries, add indexes where necessary, and ensure queries are written efficiently.', '2024-11-14 00:00:00', '07:30:00', 0, 2, '2024-11-11 12:55:11', '2024-11-13 06:11:44'),
(8, 'Write Unit Tests for New API Endpoints', 'Develop unit tests for the newly created API endpoints. Ensure the API meets the expected behavior and edge cases are properly handled.', '2024-11-15 00:00:00', '11:30:00', 0, 2, '2024-11-11 13:32:02', '2024-11-13 06:12:08'),
(14, 'Collaborate on System Architecture Design', 'Participate in a meeting to discuss the high-level design and architecture of the new microservices-based system. Provide input on scalability, security, and fault tolerance.', '2024-11-13 00:00:00', '06:30:00', 0, 2, '2024-11-12 10:45:40', '2024-11-13 06:13:44'),
(19, 'Update Dependencies in Backend Project', 'Review and update the outdated dependencies in the backend service. Ensure compatibility with the latest version of libraries and test the system after the update.', '2024-11-14 00:00:00', '05:30:00', 0, 2, '2024-11-12 17:16:10', '2024-11-13 06:11:16'),
(21, 'Prepare Deployment Pipeline', 'Set up a continuous integration/continuous deployment (CI/CD) pipeline for the project. Ensure the automated build process runs smoothly and deploys to the correct environment.', '2024-11-21 00:00:00', '10:30:00', 0, 2, '2024-11-12 17:33:22', '2024-11-13 06:13:13'),
(22, 'Implement New Feature in Application', 'Develop and integrate the new feature for user notifications in the application. Ensure the feature is scalable and user-friendly. Write tests to verify functionality and performance.', '2024-11-13 00:00:00', '05:30:00', 0, 9, '2024-11-12 18:44:58', '2024-11-13 05:59:19'),
(23, 'Refactor Legacy Code for Maintainability', 'Refactor the legacy code to improve readability and maintainability. Focus on breaking down large functions and adding meaningful comments.\n\n', '2024-11-17 00:00:00', '05:30:00', 0, 2, '2024-11-12 20:52:54', '2024-11-13 06:12:44'),
(24, 'Fix Bug in User Authentication', 'Investigate and fix the issue where users are unable to log in after the recent update. Check the authentication service and resolve any session-related errors.', '2024-11-15 00:00:00', '18:30:00', 0, 9, '2024-11-13 05:59:56', '2024-11-13 05:59:56'),
(25, 'Code Review for Pull Requests', 'Review the latest pull requests from team members. Ensure code quality standards are met and provide feedback on performance improvements or best practices.', '2024-11-14 00:00:00', '17:30:00', 0, 9, '2024-11-13 06:00:28', '2024-11-13 06:00:28');

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reset_token` varchar(500) DEFAULT NULL,
  `reset_token_expirey` varchar(500) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `reset_token`, `reset_token_expirey`, `created_at`, `updated_at`) VALUES
(2, 'test2', 'test2@gmail.com', '$2a$10$bDtaZaof0FpVr4AdHGbeK.kFLv8dghyxE1Q9m2lFDFA9fZ/Fw.PNK', NULL, NULL, '2024-11-09 14:40:55', '2024-11-13 06:22:31'),
(9, 'Kusal Mendis', 'kusal@gmail.com', '$2a$10$tbPD/wsQIv0CFw.lzCDkeukqrqBeVvqgN0.hpK8DniKvH1eUPqt1.', NULL, NULL, '2024-11-12 18:35:59', '2024-11-12 18:35:59');

ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;
