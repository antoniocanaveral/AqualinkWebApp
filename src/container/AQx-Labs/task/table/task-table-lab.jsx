import { Row, Table, Badge, Button, Space } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilListOlAlt from '@iconscout/react-unicons/icons/uil-list-ol-alt';
import Calendars from '../../../calendar/Calendar';

function TaskLabTable() {
    const columns = [
        {
            title: '#ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Unidad/Tanque',
            dataIndex: 'unidad',
            key: 'unidad',
        },
        {
            title: 'Tarea',
            dataIndex: 'tarea',
            key: 'tarea',
        },
        {
            title: 'Prioridad',
            dataIndex: 'prioridad',
            key: 'prioridad',
            render: (text) => (
                <span>
                    {text === 'Alta' ? (
                        <Badge color="red" text="Alta" />
                    ) : (
                        <Badge color="blue" text="Normal" />
                    )}
                </span>
            ),
        },
        {
            title: 'Estado',
            dataIndex: 'estado',
            key: 'estado',
            render: (text) => (
                <span className={`ninjadash-status ninjadash-status-${text === 'en progreso' ? 'asigned' : 'waiting'}`}>
                    {text === 'en progreso' ? 'En progreso' : 'Completado'}
                </span>
            ),
        }
        ,
        {
            title: 'Acciones',
            key: 'acciones',
            render: (text, record) => (
                <Space size="middle">
                    <Link className="view" to={`./${record.id}/view`}>
                        <UilEye size={15} color={"black"} />
                    </Link>
                    <Link className="edit" to={`./${record.id}/edit`}>
                        <UilEdit size={15} color={"black"} />
                    </Link>
                    <Link className="params" to={`./${record.id}/params`}>
                        <UilListOlAlt size={15} color={"black"} />
                    </Link>
                </Space>
            ),
        }
    ];

    const data = [
        {
            key: '1',
            id: 32,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Alimentación de Tanque T4',
            prioridad: 'Alta',
            estado: 'en progreso',
        },
        {
            key: '2',
            id: 33,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Alimentación de Tanque T3',
            prioridad: 'Normal',
            estado: 'en progreso',
        },
        {
            key: '3',
            id: 34,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Muestra Biológica detección de enfermedades T2',
            prioridad: 'Alta',
            estado: 'en progreso',
        },
        {
            key: '4',
            id: 35,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Muestra Físico Química T1',
            prioridad: 'Normal',
            estado: 'en progreso',
        },
        {
            key: '5',
            id: 36,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Muestra Físico Química T3',
            prioridad: 'Normal',
            estado: 'en progreso',
        },
        {
            key: '6',
            id: 37,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Raleo de Tanque T1',
            prioridad: 'Normal',
            estado: 'en progreso',
        },
        {
            key: '7',
            id: 38,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Población T4',
            prioridad: 'Alta',
            estado: 'completado',
        },
        {
            key: '8',
            id: 39,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Población T3',
            prioridad: 'Normal',
            estado: 'completado',
        },
        {
            key: '9',
            id: 40,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Alimentación de Tanque T2',
            prioridad: 'Normal',
            estado: 'completado',
        },
        {
            key: '10',
            id: 41,
            unidad: 'EcSSA Esmeraldas',
            tarea: 'Alimentación de Tanque T1',
            prioridad: 'Normal',
            estado: 'completado',
        },
    ];

    return (
        <div>
            <Calendars />
        </div>

    );
}

export default TaskLabTable;
