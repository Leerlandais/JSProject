-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 12, 2024 at 05:21 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `js_leaderboard`
--
CREATE DATABASE IF NOT EXISTS `js_leaderboard` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `js_leaderboard`;

-- --------------------------------------------------------

--
-- Table structure for table `game_has_score`
--

DROP TABLE IF EXISTS `game_has_score`;
CREATE TABLE IF NOT EXISTS `game_has_score` (
  `game_game_id` tinyint UNSIGNED NOT NULL,
  `score_score_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `jsl_games`
--

DROP TABLE IF EXISTS `jsl_games`;
CREATE TABLE IF NOT EXISTS `jsl_games` (
  `jsl_game_id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `jsl_game_name` varchar(128) NOT NULL,
  `jsl_game_image` varchar(255) NOT NULL,
  `jsl_game_url` varchar(255) NOT NULL,
  `jsl_game_desc` varchar(255) NOT NULL,
  `jsl_game_visibility` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`jsl_game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `jsl_games`
--

INSERT INTO `jsl_games` (`jsl_game_id`, `jsl_game_name`, `jsl_game_image`, `jsl_game_url`, `jsl_game_desc`, `jsl_game_visibility`) VALUES
(1, 'Snake', 'url(images/snake.png)', '', '', 1),
(2, 'Memory Game', 'url(images/memCardGame.png)', '', '', 1),
(3, 'Minefield', '', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `jsl_scores`
--

DROP TABLE IF EXISTS `jsl_scores`;
CREATE TABLE IF NOT EXISTS `jsl_scores` (
  `jsl_score_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `jsl_score_value` int UNSIGNED NOT NULL,
  PRIMARY KEY (`jsl_score_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `jsl_users`
--

DROP TABLE IF EXISTS `jsl_users`;
CREATE TABLE IF NOT EXISTS `jsl_users` (
  `js_user_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `js_user_name` varchar(128) NOT NULL,
  `js_user_email` varchar(255) NOT NULL,
  `js_user_pass` varchar(255) NOT NULL,
  `js_user_permission` tinyint UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`js_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `jsl_users`
--

INSERT INTO `jsl_users` (`js_user_id`, `js_user_name`, `js_user_email`, `js_user_pass`, `js_user_permission`) VALUES
(1, 'leerlandais', 'lee@leerlandais.com', '$2y$10$y0pLpP4tuXDuLaDakIpkdO17YjRqZ6U5UEHPEid9LHR60L7eYIFy.', 255);

-- --------------------------------------------------------

--
-- Table structure for table `user_has_score`
--

DROP TABLE IF EXISTS `user_has_score`;
CREATE TABLE IF NOT EXISTS `user_has_score` (
  `user_user_id` int UNSIGNED NOT NULL,
  `score_score_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`user_user_id`,`score_score_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
