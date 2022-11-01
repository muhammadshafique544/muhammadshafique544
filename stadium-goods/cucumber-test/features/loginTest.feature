Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log in 

    Given I am on the login page
    When I login with username and password
    Then It should click the button
