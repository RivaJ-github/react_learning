const effectStack = []

function cleanup(effect) {
    // 从该effect订阅的所有state对应subs中移除该effect
    for (const subs of effect.deps) {
        subs.delete(effect)
    }
    // 将该effect依赖的所有state对应subs移除
    effect.deps.clear()
}

function subscribe(effect, subs) {
    // 订阅关系建立
    subs.add(effect)
    // 依赖关系建立
    effect.deps.add(subs)
}

function useState(value) {
    // 保存订阅该state变化的effect
    const subs = new Set()

    const getter = () => {
        // 获取当前上下文的effect
        const effect = effectStack[effectStack.length - 1]
        if (effect) {
            // 建立订阅发布关系
            subscribe(effect, subs)
        }
        return value
    }
    const setter = (newValue) => {
        value = newValue
        // 通知所有订阅该state变化的effect执行
        for (const effect of [...subs]) {
            effect.execute()
        }
    }
    return [getter, setter]
}

function useEffect(callback) {
    const execute = () => {
        cleanup(effect)
        effectStack.push(effect)
        try {
            callback()
        } finally {
            effectStack.pop()
        }
    }
    const effect = {
        execute,
        deps: new Set()
    }
    execute()
}

function useMemo(callback) {
    const [s, set] = useState()
    useEffect(() => set(callback()))
    return s
}

/** 测试 */
const [name1, setName1] = useState('LiLei')
const [name2, setName2] = useState('HanMeimei')
const [showAll, setShowAll] = useState(true)

const whoIsHere = useMemo(() => {
    if (!showAll()) {
        return name1()
    }
    return `${name1()} 和 ${name2()}`
})

useEffect(() => {
    console.log('谁在那儿:', whoIsHere())
})

setName2('XiaoHong')

setShowAll(false)

setName1('XiaoMing')
