import os
import requests

from flask import redirect, render_template, request, session
from functools import wraps

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function

def apology(message, code):
    return render_template("apology.html", message = message, code = code)

def check_credit(credit):
    if credit.isdigit() == False:
        return False
    n = len(credit)
    # checks if legit
    if n < 10:
        return False
    answer = True
    simpleadd = 0
    multiby2 = 0
    tempremainder = 0
    simpleaddflag = False

    firstDigit = credit[0]
    doubledigit = credit[0:2]

    credit_number = int(credit)
    # Luhn's algorithm
    while credit_number >= 1:
        tempremainder = credit_number % 10
        credit_number = int(credit_number / 10)

        if simpleaddflag == False:
            simpleadd = simpleadd + tempremainder
            simpleaddflag = True

        elif simpleaddflag == True and tempremainder * 2 >= 10:
            tempremainder2 = tempremainder * 2
            remainder2 = 0
            while tempremainder2 >= 1:
                remainder2 = tempremainder2 % 10
                multiby2 = multiby2 + remainder2
                tempremainder2 = int(tempremainder2 / 10)

            simpleaddflag = False

        else:
            multiby2 = multiby2 + (tempremainder * 2)
            simpleaddflag = False


    checksum = round(simpleadd) + round(multiby2)
    if checksum % 10 == 0:
        answer = True

    else:
        answer = False

    # gives last results of INVALID or AMEX or VISA or MASTERCARD based on #of digits and starting digits if valid
    if answer == False:
        return ("INVALID")

    elif n == 15 and (int(doubledigit) == 37 or int(doubledigit) == 34):
            return ("AMEX")

    elif int(firstDigit) == 4:
        if n == 13 or n == 16:
            return ("VISA")

    elif n == 16 and 51 <= int(doubledigit) and int(doubledigit) <= 55:
        return ("MASTERCARD")

    else:
        return ("INVALID")
# Hello sjktj l