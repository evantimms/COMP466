from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from part4.api.api import *
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'part4/index.html')

def computers(request):
    computer_info = []
    computers = get_computers()
    for computer in computers:
        components = get_components_for_computer(computer['id'])
        computer_info.append({
            'components': components,
            'computer': computer
        })
    template = loader.get_template('part4/computers.html')
    context = {
        'computer_info': computer_info,
        'computers': computers
    }
    return HttpResponse(template.render(context, request))

def customize(request, id):
    computer = get_computer(id)
    selected_components = get_components_for_computer(id)
    all_components = get_components()
    template = loader.get_template('part4/customize.html')
    context = { 
        'computer': computer,
        'selected_components': selected_components,
        'all_components': all_components
    }
    return HttpResponse(template.render(context, request))

def parts(request):
    return render(request, 'part4/parts.html')

def contact(request):
    return render(request, 'part4/contact.html')

@csrf_exempt
def cart(request):
    cart_str = request.body.decode('utf-8')
    cart = json.loads(cart_str)
    cart_info = []
    total_price = 0
    for computer in cart:
        print(computer)
        components = get_component_details(computer['components'])
        cart_info.append({
            'components': components,
            'computer': computer
        })
        total_price += computer['price']
    total_price = round(total_price, 2)

    template = loader.get_template('part4/cart.html')
    context = {
        'cart_info': cart_info,
        'total_price': total_price
    }
    return HttpResponse(template.render(context, request))


def create(request):
    return render(request, 'part4/create.html')

def login(request):
    return render(request, 'part4/login.html')

def logout(request):
    pass