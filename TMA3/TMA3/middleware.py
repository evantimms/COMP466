class AddCorsAll:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        print(request.headers)
        request.META['Access-Control-Allow-Origin:'] = '*'
        response = self.get_response(request)
        return response