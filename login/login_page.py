'''
This file contains the LoginPage class which represents the login page UI.
'''
import tkinter as tk
class LoginPage(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.master = master
        self.master.title("Login Page")
        self.pack()
        self.create_widgets()
    def create_widgets(self):
        # Username label and entry
        self.username_label = tk.Label(self, text="Username:")
        self.username_label.pack()
        self.username_entry = tk.Entry(self)
        self.username_entry.pack()
        # Password label and entry
        self.password_label = tk.Label(self, text="Password:")
        self.password_label.pack()
        self.password_entry = tk.Entry(self, show="*")
        self.password_entry.pack()
        # Login button
        self.login_button = tk.Button(self, text="Login", command=self.login)
        self.login_button.pack()
    def login(self):
        username = self.username_entry.get()
        password = self.password_entry.get()
        # Perform login validation here
        # You can add your own logic to validate the username and password
        if username == "admin" and password == "password":
            print("Login successful")
        else:
            print("Login failed")
root = tk.Tk()
login_page = LoginPage(root)
root.mainloop()