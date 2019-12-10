const { _ } = window;

if (!_) { throw new Error('deepMerge依赖lodash'); }

function customizer(objValue: object, srcValue: object): object {
    if (_.isPlainObject(srcValue)) {
        return _.mergeWith(objValue, srcValue, customizer);
    }
    return srcValue;
}

// 深度合并，包含原型
export default (target: object, obj: object): object => _.mergeWith(target, obj, customizer);
