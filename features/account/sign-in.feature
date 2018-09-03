# Define feature

Feature: Sign-in

# Background allows to define common steps

Background:
    User Opens Login Page

# Scanario

Scenario: Sign-in with correct credentials

Background:
    Given Open page 'https://my.syncplicity.com'

When User enters email 'feature-2@dispostable.com' and password 'invalid-password' on login screen
Then Error is displayed 'Invalid email or password. Please try again.'