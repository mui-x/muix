import React from 'react'

import { TCommonStyles, TVariants, TSheeter, TComponents } from 'reactxx-typings'
import { atomizeVariants } from 'reactxx-sheeter'
import { TTransition } from 'reactxx-sheet-transition'
import { getSheetFlags } from 'reactxx-sheet-flags';
import { TSBugHelper, getFlagsAll } from 'reactxx-core';

interface Shape extends TSheeter.ShapeAncestor {
    common: TSheeter.ShapeViews<'root' | 'label'> & TSheeter.ShapeTexts<'text'>
    style: 'View'
    transitionGroups: TSheeter.ShapeMarks<'mobile' | 'tablet'>
    sheetFlags: TSheeter.ShapeMarks<'active'>
}

interface Shape2 extends TSheeter.ShapeAncestor {
}


const Comp: TComponents.SFC<Shape> = props => null
const Comp2: TComponents.SFC<Shape2> = props => null

const Test1 = <Comp  styleX={{margin:0}} />
const Test2 = <Comp2/>

export type Wrapper<T> = {
    [P in keyof T]: T[P]
}

type Sht = Record<'root', {
    $transitionGroup?: TTransition.Group<'View', Shape>
}>

const sht: Sht = {
    root: {
        $transitionGroup: {
            $name: 'mobile',
            //color: ['', '']
        }
    }
}

const grp: TSheeter.Ruleset<'View', Shape> = {
    $transitionGroup: {
        $name: 'mobile',
        //color: ['', '']
    }
}
//const grp: TSheeter.Ruleset<'View', Shape> = {


//https://github.com/Microsoft/TypeScript/issues/27448
const ts: TSBugHelper<Shape> = {}

const sheet2: TSheeter.Sheet<Shape> = ts.sheet = {
    root: {
        //color: '',
        opacity: 0.5,
        transform: {
            scale: 100,
        },
        $native: {
            //color:''
        },
        $web: {
            //x:1
        },
        $transitionGroup: ts.transitionGroupView = {
            $name: 'mobile', // allow grouping of $transitions for more elements (the same Animation.Value for native etc.)
            opacity: [1, 0],
            //color: ['', ''],
        }, 
        $sheetFlags: {
            active: {
                //color: '',
                $transitionGroup: ts.transitionGroupView = {
                    $name: 'mobile',
                    $open: true,
                    //color: ['',''],
                }
            }
        },
    },
    label: {
        //color:'',
        $transitionGroup: ts.transitionGroupView = {
            opacity: [1, 0],
            $name: 'mobile',
        },
    },
    text: {
        $web: {
            opacity: 0,
            color: 'red',
            $transition: ts.transitionText = {
                $duration: 400,
                $easing: '',
                $props: ['opacity', 'color'],
            },
            ':hover': {
                opacity: 1,
                color: 'blue',
            }
        },
    }
}