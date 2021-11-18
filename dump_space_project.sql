-- MySQL dump 10.13  Distrib 8.0.27, for macos11.6 (arm64)
--
-- Host: localhost    Database: react_space
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `react_space`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `react_space` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `react_space`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Doe','john.doe@example.com','Paris','English','$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ'),(2,'Valeriy','Appius','valeriy.ppius@example.com','Moscow','Russian','$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlemZ6ZnpmZQ$eSetR6KPUNAGW+q+wDadcw'),(3,'Ralf','Geronimo','ralf.geronimo@example.com','New York','Italian','$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlemZ6ZnpmZXphZGF6ZGQ$a0bg5DZB6H6v3jjQC81DXg'),(4,'Maria','Iskandar','maria.iskandar@example.com','New York','German','$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlenplZHpkZnpmemZlemFkYXpkZA$V1qAnJDyMuuWG7g9yoGYXA'),(5,'Jane','Doe','jane.doe@example.com','London','English','$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlenplZHpkZGZ6ZnpmZXphZGF6ZGQ$VCzq45PL9t8khtc44Kk5iw'),(6,'Johanna','Martino','johanna.martino@example.com','Milan','Spanish','$argon2id$v=19$m=16,t=2,p=1$emVmemVmemVmemZlenplZHpkZGZ6ZnpmZXphZGF6ZGQ$UKaGZ9hGFn/S5SBQDMe/Uw'),(7,'test1','test1','test1@test.com',NULL,NULL,'$argon2id$v=19$m=65536,t=5,p=1$3SKh2Nf8GnExbJBYAFRTdw$moaEg1c8MF0NzKT1HLbBjwjYciyjJ4BpGMOzqkXJwZs'),(8,'test2','test2','test2@email.com',NULL,NULL,'$argon2id$v=19$m=65536,t=5,p=1$5B65yQQS1MZvt9L3+kVvAw$OX1PvY8NO1eSuaZr4jKnxDSvrK7FnJlso4GjN6uNa9k');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-18  9:49:58
