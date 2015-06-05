Feature: Add/remove users

  Background:
    Given I am an admin user

  @dev
  Scenario: Add player
    When I add a new player
    Then the new player should be visible
