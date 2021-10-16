from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from part3.api.api import get_computers, get_components_for_computer


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

def customize(request):
    return render(request, 'part3/customize.html')

def parts(request):
    return render(request, 'part3/parts.html')

def cart(request):
    return render(request, 'part3/cart.html')

def orders(request):
    return render(request, 'part3/orders.html')