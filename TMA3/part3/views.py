from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from part3.api.api import *


def index(request):
    return render(request, 'part3/index.html')

def computers(request):
    computer_info = []
    computers = get_computers()
    for computer in computers:
        components = get_components_for_computer(computer['id'])
        computer_info.append({
            'components': components,
            'computer': computer
        })
    template = loader.get_template('part3/computers.html')
    context = {
        'computer_info': computer_info,
    }
    return HttpResponse(template.render(context, request))

def customize(request, id):
    computer = get_computer(id)
    selected_components = get_components_for_computer(id)
    template = loader.get_template('part3/customize.html')
    context = { 
        'computer': computer,
        'selected_components': selected_components
    }
    return HttpResponse(template.render(context, request))

def parts(request):
    return render(request, 'part3/parts.html')

def cart(request):
    return render(request, 'part3/cart.html')

def orders(request):
    return render(request, 'part3/orders.html')