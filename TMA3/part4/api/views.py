from django.http import JsonResponse, HttpResponseRedirect
from part4.api.api import *
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from part4.models import Cart, Order, StoreUser


def components(request):
    components = get_components()
    return JsonResponse(components, safe=False)


def login(request):
    print('Hit')

    return HttpResponse('User created')


def logout(request):
    print('Hit')

    return HttpResponse('User created')



# AUTH
def create_new_user_db(params):
    user = User.objects.create_user(
        params['userName'],
        params['email'],
        params['password']
    )
    user.last_name = params['lastName']
    user.first_name = params['firstName']
    user.save()
    return user

def create_new_store_user(user):
    
    su = StoreUser.objects.create(user=user)
    Cart.objects.create(store_user=su)
    Order.objects.create(store_user=su)

@csrf_exempt
def create_user(request):
    str = request.body.decode('utf-8')
    user_params = json.loads(str)

    user = create_new_user_db(user_params)
    create_new_store_user(user)

    return HttpResponseRedirect(redirect_to='../../')
