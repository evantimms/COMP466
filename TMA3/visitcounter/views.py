from django.shortcuts import render

def index(request):
    return render(request, 'visitcounter/index.html')