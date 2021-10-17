import os
import json
from part4.models import *
from TMA3.settings import BASE_DIR

def buildComputerObj(spec):
    obj = {}
    obj['id'] = spec.computer.pk
    obj['name'] = spec.computer.name
    obj['price'] = spec.computer.price
    obj['components'] = {
        'cpu': spec.cpu.pk,
        'graphics': spec.graphics_card.pk,
        'hardDrive': spec.hard_drive.pk,
        'ram': spec.ram.pk,
        'os': spec.os.pk,
        'display': spec.display.pk,
        'soundCard': spec.sound_card.pk
    }
    return obj

def get_computers():
    specs = ComputerSpecs.objects.filter(computer__default=True)
    res = []
    for spec in specs:
        res.append(buildComputerObj(spec))
    return res

def get_computer(id):
    spec = ComputerSpecs.objects.filter(pk=id)[0]
    return buildComputerObj(spec)

def get_components():
    res = {
        'cpu': list(Cpu.objects.values()),
        'graphics': list(GraphicsCard.objects.values()),
        'hardDrive': list(HardDrive.objects.values()),
        'ram': list(Ram.objects.values()),
        'os': list(Os.objects.values()),
        'display': list(Display.objects.values()),
        'soundCard': list(SoundCard.objects.values()),
    }
    return res

def get_components_for_computer(id):
    computer = get_computer(id)
    all_components = get_components()
    components = {}
    for key in all_components.keys():
        for component in all_components[key]:
            if component['id'] == computer['components'][key]:
                components[key] = component
    return components

def get_component_details(components):
    all_components = get_components()
    component_details = {}
    for key in components.keys():
        for candidate in all_components[key]:
            if candidate['id'] == components[key]:
                component_details[key] = candidate
    
    return component_details
