package com.example.api_user.dto;

import lombok.Data;

@Data
public class LoginDTO {
  private String username;
  private String user_password;

  public String getUsername() {
    return username;
  }

  public String getUser_password() {
    return user_password;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setUser_password(String user_password) {
    this.user_password = user_password;
  }
}
